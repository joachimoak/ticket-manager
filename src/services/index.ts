import ticketRoutes from "./ticket/routes";
import userRoutes from "./user/routes";
import commentRoutes from "./comment/routes";

export default [...userRoutes, ...ticketRoutes, ...commentRoutes];
