import AppStoreIcon from "@/components/Icons/AppStoreIcon";
import GooglePlayIcon from "@/components/Icons/GooglePlayIcon";

export default function DownloadPart() {
    return (
        <div className="space-y-2">
            <div className="text-primary text-[16px] pb-2 font-semibold">DOWNLOAD APP</div>
            <div className="w-[175px] px-[20px] py-[18px] bg-third rounded-md">
                <div className="flex gap-x-3 items-center">
                    <GooglePlayIcon />
                    <div className="space-y-1">
                        <div className="text-[11px]">Get it now</div>
                        <div className="text-[14px]">Google Play</div>
                    </div>
                </div>
            </div>
            <div className="w-[175px] px-[20px] py-[18px] bg-third rounded-md">
                <div className="flex gap-x-3 items-center">
                    <AppStoreIcon />
                    <div className="space-y-1">
                        <div className="text-[11px]">Get it now</div>
                        <div className="text-[14px]">App Store</div>
                    </div>
                </div>
            </div>
        </div>
    )
}