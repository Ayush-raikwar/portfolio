import { constants } from "./constants"

export const handleLink = (type) => {
    if (type === 'github') {
        window.open(constants.social_links.github)
    } else if (type === 'linkedin') {
        window.open(constants.social_links.linkedin)
    } else if (type === 'ig') {
        window.open(constants.social_links.instagram)
    } else if (type === 'email') {
        window.open(constants.social_links.mail)
    }
}