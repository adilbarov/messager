import { stringify } from "querystring"

export class ApiClient {
    public constructor (
        public readonly baseUrl: string
    ) {}

    public async get(path: string, qs: Record<string, string | number | boolean>, signal?: AbortSignal) {
        const result = await fetch(`${this.baseUrl}${path}?${stringify(qs)}`, {
            method: 'GET',
            signal
        })

        if (!result.ok) {
            throw new Error()
        }

        return await result.json()
    } 

    public async post(path: string, body: Object, signal?: AbortSignal) {
        const result = await fetch(`${this.baseUrl}${path}`, {
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"},
            method: 'POST',
            signal
        })

        if (!result.ok) {
            throw new Error()
        }

        return await result.json()
    }
}