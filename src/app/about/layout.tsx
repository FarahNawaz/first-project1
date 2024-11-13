export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (

    <div>   
         {children}
         <p>this is about page</p>
         </div>
    );
  }
  