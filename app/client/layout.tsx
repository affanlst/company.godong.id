import NavigationBar from "@/components/NavigationBar";
import { ProdukHoverProvider } from '../context/ProdukHoverContext';
export default function ClientLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen">
        <div className="w-full h-full p-0 m-0 flex flex-col">
          <ProdukHoverProvider>
            <div className="fixed bg-white w-full h-[75px]">
                <NavigationBar/>
            </div>
            <div className="mt-[75px] h-full w-full">
                {children}
            </div>
          </ProdukHoverProvider>
        </div>
    </div>
  );
}