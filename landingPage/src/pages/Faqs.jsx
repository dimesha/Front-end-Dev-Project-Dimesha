import React from "react";

export default function Faqs(){
    return(
        <div
    className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 mb-3 sm:mx-auto sm:rounded-lg sm:px-10">
    <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
            <p className="mt-5 text-center text-purple-600  text-lg font-bold tracking-tight md:text-lg">Frequently asked questions</p>
           
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl divide-y divide-neutral-200">
            <div className="mb-2 py-5 px-5 bg-purple-50 rounded-md ">
                <details className="group">
                <summary
                className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-purple-600 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing Aliquam tincidunt purus ac nunc ultricies ultrices.?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
                        billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                        pricing for certain services. Payment is typically made through a credit card or other
                        secure online payment method.
                    </p>
                </details>
            </div>
            <div className="mb-2 py-5 px-5 bg-purple-50 rounded-md">
                <details className="group">
                <summary
                className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-purple-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing  Aliquam tincidunt purus ac nunc ultricies ultrices?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a 30-day money-back
                        guarantee for most of its subscription plans. If you are not satisfied with your
                        subscription within the first 30 days, you can request a full refund. Refunds for
                        subscriptions that have been active for longer than 30 days may be considered on a
                        case-by-case basis.
                    </p>
                </details>
            </div>
            <div className="mb-2 py-5 px-5 bg-purple-50 rounded-md">
                <details className="group">
                <summary
                className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-purple-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing Aliquam tincidunt purus ac nunc ultricies ultrices?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">To cancel your subscription, you can
                        log in to your account and navigate to the subscription management page. From there, you
                        should be able to cancel your subscription and stop future billing.
                    </p>
                </details>
            </div>
            <div className="mb-2 py-5 px-5 bg-purple-50 rounded-md">
                <details className="group">
                <summary
                className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-purple-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing Aliquam tincidunt purus ac nunc ultricies ultrices
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a free trial of our software
                        for a limited time. During the trial period, you will have access to a limited set of
                        features and functionality, but you will not be charged.
                    </p>
                </details>
            </div>
           
        </div>
    </div>
</div>
    )

}


