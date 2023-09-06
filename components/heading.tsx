type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center dark:text-[rgb(97,244,241)]'>
      {children}
    </h2>
  );
}
