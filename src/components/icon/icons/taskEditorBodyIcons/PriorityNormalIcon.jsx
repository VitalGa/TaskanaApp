export default function PriorityNormalIcon({ color = 'currentColor', ...props }) {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.5761 22.9801C26.311 23.2983 25.8381 23.3413 25.5198 23.0761L20 18.0524L14.4801 23.0761C14.1619 23.3413 13.689 23.2983 13.4238 22.9801C13.1586 22.6619 13.2016 22.189 13.5198 21.9238L19.5198 16.5C19.798 16.2682 20.202 16.2682 20.4801 16.5L26.4801 21.9238C26.7983 22.189 26.8413 22.6619 26.5761 22.9801Z'
        fill={color}
      />
    </svg>
  );
}
