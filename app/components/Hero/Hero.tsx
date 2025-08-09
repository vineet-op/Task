'use client'

export default function CaseStudies() {
    return (
        <div className="min-h-screen overflow-hidden bg-[#050B1F] flex items-center justify-center relative">
            <svg
                viewBox="0 0 1000 600"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-[120%] h-auto [filter:blur(50px)] opacity-100"
            >
                <defs>
                    {/* <!-- Gradient matches your image --> */}
                    <linearGradient id="glow-gradient" x1="30%" y1="1200%" x2="120%" y2="-20%">
                        <stop offset="0%" stop-color="#1e3a8a" />
                        <stop offset="40%" stop-color="#4338ca" />
                        <stop offset="70%" stop-color="#6d28d9" />
                        <stop offset="100%" stop-color="#a855f7" />
                    </linearGradient>
                </defs>

                {/* <!-- Bottom-left to top-right S-curve --> */}
                <path
                    d="M -200 0
               Q 300 600, 600 300 
               T 1100 500"
                    stroke="url(#glow-gradient)"
                    stroke-width="150"
                    stroke-linecap="round"
                    fill="none"
                />
            </svg>

            <svg className="
            absolute left-0 top-0 -rotate-6 opacity-50" width="766" height="659" viewBox="0 0 666 659" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M665.528 499.098C501.686 565.582 351.39 572.979 200.063 584.827C124.422 590.654 48.4864 597.768 -28.6588 610.206C-105.731 622.281 -184.023 639.678 -262.416 657.565" stroke="url(#paint0_linear_1_2)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M644.389 507.727C479.352 556.989 328.263 545.317 175.262 542.04C22.7873 536.462 -131.622 539.285 -291.139 564.451" stroke="url(#paint1_linear_1_2)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M623.086 514.019C458.734 543.854 307.357 517.096 154.608 496.283C2.20676 473.949 -151.546 457.563 -312.622 473.098" stroke="url(#paint2_linear_1_2)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M601.79 517.901C439.515 528.504 289.312 486.453 138.189 448.376C-12.7782 409.618 -164.647 374.838 -326.645 384.232" stroke="url(#paint3_linear_1_2)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M580.722 519.362C263.051 502.882 -9.47554 289.285 -332.693 297.018" stroke="url(#paint4_linear_1_2)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M560.053 518.413C251.389 467.586 -12.2855 220.408 -330.192 209.927" stroke="url(#paint5_linear_1_2)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M539.953 515.102C243.506 428.633 -10.5533 157.128 -318.721 121.825" stroke="url(#paint6_linear_1_2)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M520.604 509.512C379.475 450.375 248.956 344.97 116.029 250.031C-16.7261 154.342 -151.869 69.1231 -298.23 32.8253" stroke="url(#paint7_linear_1_2)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M502.166 501.727C369.782 425.645 246.684 308.982 121.396 201.923C58.7186 148.519 -4.61934 98.0418 -69.6662 54.9799C-134.646 11.6257 -201.316 -24.3086 -269.111 -55.3712" stroke="url(#paint8_linear_1_2)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M484.802 491.859C362.022 400.948 247.953 272.053 131.057 155.456C72.5965 97.212 13.3166 42.5448 -47.437 -5.68899C-108.095 -54.3419 -170.224 -96.5713 -232.145 -139.707" stroke="url(#paint9_linear_1_2)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M468.647 480.066C356.523 375.469 252.44 235.719 144.933 110.963C91.1808 48.5551 36.4808 -9.66917 -19.5039 -62.3299C-75.3681 -115.517 -132.493 -163.155 -188.304 -216.576" stroke="url(#paint10_linear_1_2)" stroke-width="2" stroke-miterlimit="10" />
                <defs>
                    <linearGradient id="paint0_linear_1_2" x1="241.936" y1="402.063" x2="161.177" y2="754.601" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4D3792" />
                        <stop offset="1" stop-color="#3952A3" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_2" x1="206.121" y1="407.329" x2="147.129" y2="664.849" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4D3792" />
                        <stop offset="1" stop-color="#3952A3" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1_2" x1="174.106" y1="411.168" x2="136.358" y2="575.949" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4D3792" />
                        <stop offset="1" stop-color="#3952A3" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1_2" x1="146.172" y1="413.529" x2="128.974" y2="488.604" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4D3792" />
                        <stop offset="1" stop-color="#3952A3" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_1_2" x1="130.846" y1="378.365" x2="119.781" y2="426.669" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4D3792" />
                        <stop offset="1" stop-color="#3952A3" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_1_2" x1="129.094" y1="302.343" x2="103.228" y2="415.254" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4D3792" />
                        <stop offset="1" stop-color="#3952A3" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_1_2" x1="132.865" y1="221.34" x2="89.2233" y2="411.849" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4D3792" />
                        <stop offset="1" stop-color="#3952A3" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_1_2" x1="142.65" y1="133.821" x2="79.7236" y2="408.516" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4D3792" />
                        <stop offset="1" stop-color="#3952A3" />
                    </linearGradient>
                    <linearGradient id="paint8_linear_1_2" x1="157.927" y1="42.4539" x2="75.1275" y2="403.901" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4D3792" />
                        <stop offset="1" stop-color="#3952A3" />
                    </linearGradient>
                    <linearGradient id="paint9_linear_1_2" x1="177.187" y1="-45.9381" x2="75.4697" y2="398.09" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4D3792" />
                        <stop offset="1" stop-color="#3952A3" />
                    </linearGradient>
                    <linearGradient id="paint10_linear_1_2" x1="199.608" y1="-127.714" x2="80.7355" y2="391.204" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4D3792" />
                        <stop offset="1" stop-color="#3952A3" />
                    </linearGradient>
                </defs>
            </svg>

            <svg width="766" height="867" viewBox="0 0 735 867" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 -bottom-40 rotate-1  opacity-50 ">
                <path d="M0.505466 387.834C142.359 282.279 285.964 237.319 429.446 187.79C501.19 163.126 572.895 137.142 644.432 105.701C715.99 74.6289 787.389 38.0995 858.763 1.0707" stroke="url(#paint0_linear_1_2)" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M18.797 374.168C166.139 284.981 315.306 258.277 464.213 222.967C613.189 190.015 761.924 148.447 909.984 83.9695" stroke="url(#paint1_linear_1_2)" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M37.8323 362.721C189.397 292.509 342.638 280.332 495.712 262.058C648.831 245.344 801.763 222.532 953.753 166.983" stroke="url(#paint2_linear_1_2)" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M57.4657 353.605C211.857 302.528 367.808 305.45 523.65 304.293C679.513 303.835 835.246 299.299 989.674 249.463" stroke="url(#paint3_linear_1_2)" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M77.4883 346.892C389.092 282.944 706.58 421.13 1017.46 332.352" stroke="url(#paint4_linear_1_2)" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M97.7336 342.612C409.259 314.171 726.625 487.085 1036.95 417.272" stroke="url(#paint5_linear_1_2)" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M118.018 340.762C426.683 349.89 740.862 548.768 1048 505.428" stroke="url(#paint6_linear_1_2)" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M138.152 341.305C289.618 363.044 442.452 432.234 594.984 490.688C747.539 549.912 899.772 598.4 1050.56 596.72" stroke="url(#paint7_linear_1_2)" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M157.955 344.203C305.219 384.543 453.702 466.494 601.889 538.6C675.984 574.523 749.981 607.448 823.768 632.765C897.563 658.382 971.127 676.393 1044.56 689.406" stroke="url(#paint8_linear_1_2)" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M177.244 349.383C318.943 406.491 461.763 502.553 604.227 586C675.458 627.669 746.582 665.669 817.514 697.072C888.458 728.904 959.211 754.15 1029.99 780.325" stroke="url(#paint9_linear_1_2)" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M195.844 356.738C330.672 429.773 466.558 538.852 601.987 632.557C669.707 679.44 737.293 722.035 804.723 758.922C872.169 796.349 939.439 828.088 1006.89 865.754" stroke="url(#paint10_linear_1_2)" stroke-width="1.5" stroke-miterlimit="10" />
                <defs>
                    <linearGradient id="paint0_linear_1_2" x1="434.887" y1="375.211" x2="424.382" y2="13.6936" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3952A3" />
                        <stop offset="1" stop-color="#4D3792" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_2" x1="468.227" y1="361.108" x2="460.553" y2="97.0297" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3952A3" />
                        <stop offset="1" stop-color="#4D3792" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1_2" x1="498.248" y1="349.341" x2="493.338" y2="180.363" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3952A3" />
                        <stop offset="1" stop-color="#4D3792" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1_2" x1="524.688" y1="340.027" x2="522.451" y2="263.04" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3952A3" />
                        <stop offset="1" stop-color="#4D3792" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_1_2" x1="548.364" y1="370.206" x2="546.925" y2="320.672" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3952A3" />
                        <stop offset="1" stop-color="#4D3792" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_1_2" x1="569.183" y1="443.343" x2="565.819" y2="327.557" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3952A3" />
                        <stop offset="1" stop-color="#4D3792" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_1_2" x1="585.905" y1="522.692" x2="580.227" y2="327.33" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3952A3" />
                        <stop offset="1" stop-color="#4D3792" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_1_2" x1="598.447" y1="609.858" x2="590.261" y2="328.167" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3952A3" />
                        <stop offset="1" stop-color="#4D3792" />
                    </linearGradient>
                    <linearGradient id="paint8_linear_1_2" x1="606.641" y1="702.131" x2="595.87" y2="331.478" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3952A3" />
                        <stop offset="1" stop-color="#4D3792" />
                    </linearGradient>
                    <linearGradient id="paint9_linear_1_2" x1="610.234" y1="792.523" x2="597.002" y2="337.185" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3952A3" />
                        <stop offset="1" stop-color="#4D3792" />
                    </linearGradient>
                    <linearGradient id="paint10_linear_1_2" x1="609.099" y1="877.314" x2="593.636" y2="345.179" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3952A3" />
                        <stop offset="1" stop-color="#4D3792" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}
