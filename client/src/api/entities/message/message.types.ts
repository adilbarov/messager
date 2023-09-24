export interface MessageSchema {
    id: number

    title: string

    userId: number

    chatId: number

    createdAt: string
}

export interface MessageCreateSchema {
    title: string

    userId: number

    chatId: number
}