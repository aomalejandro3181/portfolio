export default function IconStar( props: React.SVGProps<SVGSVGElement>) {

    return (
         <svg 
    className={`${props.className} text-accent-green fill-current stroke-black stroke-[2px] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all cursor-pointer`}
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
    );
}