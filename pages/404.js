import ALink from "../src/components/ALink";

export default function Error() {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <h1 className='text-black dark:text-white'> The page is none</h1>
            <p className="p-4 dark:bg-white dark:text-black bg-neutral-900 text-white rounded-2xl">
                <ALink text={'BACK TO HOME'} href={'/'}></ALink>
            </p>
        </div>
    )
}
