const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-full items-center justify-center rounded-full border p-5 shadow backdrop-blur-sm dark:border-2">
    {children}
  </div>
)

export default Card
