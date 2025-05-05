
import { Link } from "react-router-dom";
import { Building, GraduationCap, Info, Projector, Mail, Image, Newspaper, LayoutGrid } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const menus = [
    {
      title: "Institucional",
      links: [
        { name: "Sobre nós", icon: <Info className="h-4 w-4" />, href: "/sobre" },
        { name: "Projetos", icon: <Projector className="h-4 w-4" />, href: "/projetos" },
        { name: "Unidades", icon: <Building className="h-4 w-4" />, href: "/unidades" },
        { name: "Estrutura", icon: <LayoutGrid className="h-4 w-4" />, href: "/estrutura" },
      ],
    },
    {
      title: "Acadêmico",
      links: [
        { name: "Ensinos", icon: <GraduationCap className="h-4 w-4" />, href: "/ensinos" },
        { name: "Notícias", icon: <Newspaper className="h-4 w-4" />, href: "/noticias" },
        { name: "Galerias", icon: <Image className="h-4 w-4" />, href: "/galerias" },
        { name: "Contato", icon: <Mail className="h-4 w-4" />, href: "/contato" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { name: "Youtube", href: "https://youtube.com", icon: "youtube" },
    { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { name: "WhatsApp", href: "https://wa.me/1234567890", icon: "whatsapp" }, // Substitua pelo número real
  ];

  return (
    <footer className="bg-colegio-azul text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/a78ac681-2089-42e4-8fc6-e3bbda2d5317.png" 
                alt="Colégio Novos Tempos" 
                className="h-16 bg-white p-2 rounded-lg"
              />
            </Link>
            <p className="text-gray-300 mb-6">
              Comprometidos com a excelência educacional e a formação de cidadãos conscientes e preparados para os desafios do futuro.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-colegio-amarelo hover:text-colegio-azul p-2 rounded-full transition-colors"
                  aria-label={social.name}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    {social.icon === "instagram" && (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </>
                    )}
                    {social.icon === "facebook" && (
                      <>
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </>
                    )}
                    {social.icon === "youtube" && (
                      <>
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </>
                    )}
                    {social.icon === "twitter" && (
                      <>
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </>
                    )}
                    {social.icon === "whatsapp" && (
                      <>
                        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"></path>
                        <path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 1.96.495 3.862 1.44 5.553L0 24l6.698-1.758c1.69.991 3.607 1.495 5.552 1.498h.005c9.834 0 16.119-7.99 16.121-15.92 0-4.258-1.435-8.252-4.05-11.373zm-9.945 30C8.678 33.449 6.83 32.968 5.22 32.017l-.484-.288-5.01 1.312 1.335-4.87-.314-.51a12.644 12.644 0 0 1-1.935-6.754c-.004-6.979 5.687-12.656 12.684-12.656 3.38 0 6.551 1.31 8.934 3.684a12.429 12.429 0 0 1 3.684 8.93c-.002 7.08-5.709 12.896-12.7 12.896z"></path>
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {menus.map((menu) => (
            <div key={menu.title}>
              <h3 className="text-lg font-bold mb-4">{menu.title}</h3>
              <ul className="space-y-2">
                {menu.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-colegio-amarelo transition-colors inline-flex items-center"
                    >
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Av. Principal, 1000<br />Centro, Cidade - Estado</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>(12) 3456-7890</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>contato@novostempos.edu.br</span>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} Colégio Novos Tempos - Instituto Educacional. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
