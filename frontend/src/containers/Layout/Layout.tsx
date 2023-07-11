import { Header } from "../../components";
import { Footer } from "../Footer/Footer";

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
      <main>
        {children}
      </main>
    <Footer />
  </>
);