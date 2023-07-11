import React, { useContext, useEffect, useState } from "react"
import { ContactList, Description, FooterContact, FooterContainer, FooterCopyright, FooterSocial, LogoContainer, SectionsWrapper, SocialLink, WebsiteAuthorLink } from "./styles"
import { WebpageContext } from "../../store/webpage-context";
import footerLogo from "../../assets/images/logo-maluszkowo-footer.png";
import { IoLogoFacebook } from "react-icons/io";

export const Footer: React.FC = () => {
  const [footerDescription, setFooterDescription] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [copyrightYear, setCopyrightYear] = useState(-1);

  const footerData = useContext(WebpageContext).nurseryDetails;
  
  useEffect(() => {
    if (Object.keys(footerData).length) {
      // console.log('FOOTER DATA', footerData);

      setFooterDescription(footerData.description);
      setAddress(footerData.address);
      setPhone(footerData.phone);
      setEmail(footerData.email);
      setFacebookLink(footerData.facebook_link);
      setCopyrightYear(footerData.year);
    }
  }, [footerData])

  return (
    <FooterContainer>
      <SectionsWrapper>
        <Description>
          <LogoContainer>
            <img src={footerLogo} alt="Logo Maluszkowo" />
          </LogoContainer>
          <p>{footerDescription}</p>
        </Description>

        <FooterContact>
          <div>
            <h2>Kontakt</h2>
            <ContactList>
              <li>Telefon: {phone}</li>
              <li>{address}</li>
              <li>{email}</li>
            </ContactList>
          </div>
        </FooterContact>

        <FooterSocial>
          <SocialLink
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer">
            <IoLogoFacebook />
          </SocialLink>
        </FooterSocial>
      </SectionsWrapper>

      <FooterCopyright>
        <p>&copy; {copyrightYear} Maluszkowo</p>
        <p>A website by 
          <WebsiteAuthorLink
            href="https://www.folta.me/"
            target="_blank"
            rel="noopener noreferrer">
              &nbsp;Folta
          </WebsiteAuthorLink>
        </p>
      </FooterCopyright>
    </FooterContainer>
  );
}