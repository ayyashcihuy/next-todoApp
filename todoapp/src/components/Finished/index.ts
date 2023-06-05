import { prisma } from "@/database";
import { todo } from "../model/model";
import { dateFormater } from "@/services/dateFormater";

export async function getFinishedTodo(): Promise<todo[]> {
    const data = await prisma.todo.findMany({
        where: {
            status: true
        }
    });

    const cleanedData: todo[] = data.map((item) => ({
        id: item.id,
        title: item.title,
        status: item.status,
        description: item.description,
        createdAt: dateFormater(item.createdAt),
        updatedAt: dateFormater(item.updatedAt)
    }))

    return cleanedData;
}