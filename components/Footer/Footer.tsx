import styles from "@/components/Footer/Footer.module.scss";
import {FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <h2 className={styles.footerTitle}>Fique por dentro das novidades</h2>
        <p className={styles.footerSubtitle}>
          Receba conteúdos exclusivos no seu email, toda semana sobre aquicultura
        </p>

        <form className={styles.footerForm}>
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className={styles.footerInput}
          />
          <button type="submit" className={styles.footerSubmit}>
            Cadastrar
          </button>
        </form>
      </div>

      <div className={styles.footerMain}>
        <div className={styles.footerBrandColumn}>
          <img
            src="/images/logo-aqua-branca.png"
            alt="Comunidade Aqua"
            className={styles.footerLogo}
          />

          <p className={styles.footerDescription}>
            A maior comunidade de aquicultores do Brasil. Conectando produtores,
            técnicos e empresas do setor da aquicultura em uma plataforma
            colaborativa e democratização de conhecimento técnico de valor.
          </p>

          <div className={styles.socials}>
            <a href="#" className={styles.socialButton} aria-label="Facebook">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className={styles.socialButton} aria-label="Twitter">
              <FaTwitter size={16} />
            </a>
            <a href="#" className={styles.socialButton} aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>Navegação</h3>
          <ul className={styles.footerLinks}>
            <li><a href="#">Início</a></li>
            <li><a href="#">Guia</a></li>
            <li><a href="#">Fórum</a></li>
            <li><a href="#">Eventos</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>Contato</h3>
          <ul className={styles.footerLinks}>
            <li className={styles.footerItem}>
              <FaEnvelope size={16} />
              <a href="mailto:comunidade@aqua.com.br">
                comunidade@aqua.com.br
              </a>
            </li>

            <li className={styles.footerItem}>
              <FaPhone size={16} />
              <a href="tel:+555133334545">
                (51) 3333-4545
              </a>
            </li>

            <li className={styles.footerItem}>
              <FaMapMarkerAlt size={16} />
              <span>Porto Alegre - RS - Brasil</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© 2024 AquaBit. Todos os direitos reservados</span>

        <div className={styles.footerBottomLinks}>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Contato</a>
        </div>
      </div>
    </footer>
  );
}