export class ApiClient {
    public constructor (
        public readonly baseUrl: string
    ) {}

    public async get(path: string, signal?: AbortSignal) {
        const result = await fetch(`${this.baseUrl}${path}`, {
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