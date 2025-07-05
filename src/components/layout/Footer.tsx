import Image from "next/image"
import type React from "react"

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div>
            <Image
              src="/images/logo-white.png"
              alt="SOITO INC Logo"
              width={160}
              height={48}
              className="mb-4 w-auto h-12"
            />
            <p className="text-gray-400 max-w-xs">Transformando visões em realidade imobiliária há 25 anos.</p>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>

          {/* Projetos */}
          <div>
            <h3 className="font-bold text-white mb-4">Projetos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Residencial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Comercial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Corporativo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Luxo
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contato@soito.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} SOITO INC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
