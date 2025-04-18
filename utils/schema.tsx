import { boolean, serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";


export const AIOutput= pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:varchar('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy'),
    createdAt:varchar('createdAt')
}) 

export const UserPurchase= pgTable('userPurchase',{
    id:serial('id').primaryKey(),
    userEmail:varchar('email'),
    userName:varchar('name'),
    active:boolean('active'),
    paymentId:varchar('paymentId'),
    SubId: varchar("SubId", { length: 255 }).notNull(),
    joinDate:varchar('joinDate')
    
})