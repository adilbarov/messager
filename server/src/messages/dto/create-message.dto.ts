import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateMessageDto {
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    @IsNumber()
    userId: number

    @IsNotEmpty()
    @IsNumber()
    chatId: number
}
