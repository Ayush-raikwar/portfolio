import { createClient } from '@supabase/supabase-js';
import { supabase } from '../utils/supabase';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // Get user's IP from Vercel headers
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(',')[0] : req.connection.remoteAddress;

    if (!ip) {
        return res.status(400).json({ message: 'IP Not Found' });
    }

    // Store in Supabase
    const { error } = await supabase.from('visitor_ips').insert([{ ip_address: ip }]);

    if (error) {
        return res.status(500).json({ message: 'Error storing IP', error });
    }

    return res.status(200).json({ message: 'IP logged successfully', ip });
}
