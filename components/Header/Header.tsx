import styles from "@/components/Header/Header.module.scss";
import { Menu, Search, X } from "lucide-react";

type HeaderProps = {
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
};

export function Header({
  mobileMenuOpen,
  onToggleMobileMenu,
}: HeaderProps) {
  return (
    <header className={styles.topBar}>
      <div className={styles.topBarContent}>
        <button
          className={styles.mobileIconButton}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={onToggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={styles.leftGroup}>
          <div className={styles.brand}>
            <img
              src="/images/logo-aqua.png"
              alt="Comunidade Aqua"
              className={styles.brandLogo}
            />
          </div>

          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Procurar na comunidade"
              className={styles.searchInput}
            />
          </div>
        </div>

        <button className={styles.mobileSearchButton} aria-label="Pesquisar">
          <Search size={20} />
        </button>

        <div className={styles.rightGroup}>
          <nav className={styles.topNav}>
            <button className={styles.navLink}>Lista</button>
            <button className={styles.navLinkActive}>Grade</button>
          </nav>

          <button className={styles.loginButton}>Entrar</button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.mobileMenuItem}>Lista</button>
          <button className={styles.mobileMenuItem}>Grade</button>
        </div>
      )}
    </header>
  );
}