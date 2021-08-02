import basicInfo from "./basic-info";
import servers from "./servers";
import components from "./components";
import tags from "./tags";
import tickets from "./tickets";
import users from "./users";
import comments from "./comments";

export default {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...tickets,
    ...users,
    ...comments
};
