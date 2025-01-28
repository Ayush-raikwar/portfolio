import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import styled from "styled-components";
import { AiOutlineFundView } from "react-icons/ai";

export const ViewCounter = ({ slug }) => {
    const [views, setViews] = useState(0);

    useEffect(() => {

        const fetchAndIncrementViews = async () => {
            const viewedSlugs = JSON.parse(localStorage.getItem("viewedSlugs")) || {};

            if (viewedSlugs[slug]) {
                const { data, error } = await supabase
                    .from("views")
                    .select("count")
                    .eq("slug", slug)
                    .single();

                if (!error && data) setViews(data.count);
                return;
            }

            const { data, error } = await supabase
                .from("views")
                .select("count")
                .eq("slug", slug)
                .single();

            if (error && error.message.includes("No rows")) {
                const { error: insertError } = await supabase
                    .from("views")
                    .insert({ slug, count: 1 });

                if (!insertError) {
                    setViews(1);
                    viewedSlugs[slug] = true;
                    localStorage.setItem("viewedSlugs", JSON.stringify(viewedSlugs));
                }
            } else if (data) {
                const newCount = data.count + 1;
                const { error: updateError } = await supabase
                    .from("views")
                    .update({ count: newCount })
                    .eq("slug", slug);

                if (!updateError) {
                    setViews(newCount);
                    viewedSlugs[slug] = true;
                    localStorage.setItem("viewedSlugs", JSON.stringify(viewedSlugs));
                }
            }
        };

        fetchAndIncrementViews();
    }, [slug]);

    return <ViewContainer>
            <AiOutlineFundView size={24}/> - {views} views
        </ViewContainer>;
};

const ViewContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    svg {
        margin-top:4px;
        margin-right: .5rem;
    }
`