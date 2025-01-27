import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
      <div className="md:flex bg-[#FF6731] md:pt-[100px] pb-[70px] md:px-20 text-white text-sm gap-44 p-5">
        <div>
          <h3 className="pb-[25px] text-lg font-medium">Discover</h3>

          <Link href="/" className="flex gap-1 pt-2 'leading-6'">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path
                  fill="#FFFFFF"
                  fill-rule="evenodd"
                  d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"
                />
              </svg>
            </span>
            <p>Lagos Island</p>
          </Link>

          <Link href="/" className="flex gap-1 pt-2 leading-6">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path
                  fill="#FFFFFF"
                  fill-rule="evenodd"
                  d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"
                />
              </svg>
            </span>
            <p>Ibadan</p>
          </Link>

          <Link href="/" className="flex gap-1 pt-2 leading-6">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path
                  fill="#FFFFFF"
                  fill-rule="evenodd"
                  d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"
                />
              </svg>
            </span>
            <p>Lagos Mainland</p>
          </Link>

          <Link href="/" className="flex gap-1 pt-2 leading-6">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path
                  fill="#FFFFFF"
                  fill-rule="evenodd"
                  d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"
                />
              </svg>
            </span>
            <p>Asokoro</p>
          </Link>
        </div>
        <div>
          <h3 className="pb-[25px] text-lg font-medium pt-5">Contact Us</h3>
          <div className="md:max-w-sm py-[5px] leading-6 flex gap-1">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path
                  fill="#FFFFFF"
                  d="M12 2c-4.4 0-8 3.6-8 8c0 5.4 7 11.5 7.3 11.8c.2.1.5.2.7.2s.5-.1.7-.2C13 21.5 20 15.4 20 10c0-4.4-3.6-8-8-8m0 17.7c-2.1-2-6-6.3-6-9.7c0-3.3 2.7-6 6-6s6 2.7 6 6s-3.9 7.7-6 9.7M12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"
                />
              </svg>
            </span>
            <p>4th floor Kunech Towers, Km 18 Osapa, Lekki Penninsula II, Lagos, Nigeria</p>
          </div>
          <div className="max-w-sm py-[5px] leading-6 flex gap-1">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36">
                <rect width="36" height="36" fill="none" />
                <path
                  fill="#FFFFFF"
                  d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z"
                  className="clr-i-outline clr-i-outline-path-1"
                />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
            </span>
            <p>info@edenoasisrealty.com</p>
          </div>
        </div>
      </div>

      <div className="py-[50px] bg-[#E24B14] text-white md:flex md:px-20 items-center">
        <p className="text-sm text-center">&copy; Eden Oasis - All rights reserved</p>
        <Image
          alt=""
          src="/Home/Eden-Oasis-Logo-Retina-white.png"
          width={96}
          height={48}
          className="mx-auto py-4"
        />
        <div className="flex gap-2 justify-center">
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
              <path
                fill="none"
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              />
            </svg>
          </Link>
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <rect width="16" height="16" fill="none" />
              <path
                fill="#FFFFFF"
                d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
              />
            </svg>
          </Link>
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
              <path
                fill="none"
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4.5 9.5H4c-.943 0-1.414 0-1.707.293S2 10.557 2 11.5V20c0 .943 0 1.414.293 1.707S3.057 22 4 22h.5c.943 0 1.414 0 1.707-.293S6.5 20.943 6.5 20v-8.5c0-.943 0-1.414-.293-1.707S5.443 9.5 4.5 9.5m2-5.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m5.826 5.25H11.5c-.943 0-1.414 0-1.707.293S9.5 10.557 9.5 11.5V20c0 .943 0 1.414.293 1.707S10.557 22 11.5 22h.5c.943 0 1.414 0 1.707-.293S14 20.943 14 20v-3.5c0-1.657.528-3 2.088-3c.78 0 1.412.672 1.412 1.5v4.5c0 .943 0 1.414.293 1.707s.764.293 1.707.293h.499c.942 0 1.414 0 1.707-.293c.292-.293.293-.764.293-1.706L22 14c0-2.486-2.364-4.5-4.703-4.5c-1.332 0-2.52.652-3.297 1.673c0-.63 0-.945-.137-1.179a1 1 0 0 0-.358-.358c-.234-.137-.549-.137-1.179-.137"
                color="#FFFFFF"
              />
            </svg>
          </Link>
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
              <g fill="none" fill-rule="evenodd">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="#FFFFFF"
                  d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm0 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m-4 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m4.5-3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
                />
              </g>
            </svg>
          </Link>
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="#FFFFFF"
                  d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m0 2c-.825 0-1.674.022-2.5.056l-.978.047l-.939.055l-.882.06l-.808.063a1.8 1.8 0 0 0-1.666 1.623C4.11 9.113 4 10.618 4 12s.11 2.887.227 4.096c.085.872.777 1.55 1.666 1.623l.808.062l.882.06l.939.056l.978.047c.826.034 1.675.056 2.5.056s1.674-.022 2.5-.056l.978-.047l.939-.055l.882-.06l.808-.063a1.8 1.8 0 0 0 1.666-1.623C19.89 14.887 20 13.382 20 12s-.11-2.887-.227-4.096a1.8 1.8 0 0 0-1.666-1.623l-.808-.062l-.882-.06l-.939-.056l-.978-.047A61 61 0 0 0 12 6m-2 3.575a.6.6 0 0 1 .819-.559l.081.04l4.2 2.424a.6.6 0 0 1 .085.98l-.085.06l-4.2 2.425a.6.6 0 0 1-.894-.43l-.006-.09z"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
