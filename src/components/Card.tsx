const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-full items-center justify-center rounded-full border bg-white p-5 shadow dark:border-2 dark:bg-gray-900">
    {children}
  </div>
)

export default Card
