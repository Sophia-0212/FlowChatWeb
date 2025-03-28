import { IProviderListener } from "@tsdaodao/base"

export class RegisterVM implements IProviderListener {
    name: string = ""
    phone: string = ""
    password: string = ""
    inviteCode: string = ""
    registerLoading: boolean = false

    notifyListener(): void {
    }

    listen(): void {
    }

    didMount(): void {
    }

    didUnMount(): void {
    }
} 