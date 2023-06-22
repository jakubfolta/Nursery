import { Header } from "../../components";

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    {/* <Footer /> */}
  </>
);