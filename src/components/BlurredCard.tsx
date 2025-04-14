const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="m-5 flex items-center justify-center rounded-full border p-4 shadow backdrop-blur-sm dark:border-2">
    {children}
  </div>
)

export default Card
