import styles from "@/components/FeaturedMagazine/FeaturedMagazine.module.scss";
import { Eye, Download, Share2, Star, BookOpen } from "lucide-react";

type FeaturedMagazineProps = {
  onOpenPdf: (pdf: string) => void;
  onShare: (title: string, pdf: string) => void;
};

export function FeaturedMagazine({
  onOpenPdf,
  onShare,
}: FeaturedMagazineProps) {
  return (
    <>
      <h2 className={styles.sectionTitle}>
        <Star size={18} fill="#055CE3" color="#055CE3" />
        Edição em Destaque
      </h2>

      <section className={styles.featured}>
        <img
          src="/images/revista-maio.jpg"
          alt="Capa da Revista Aqua Maio 2024"
          className={styles.featuredImage}
        />

        <div className={styles.featuredInfo}>
          <h3 className={styles.featuredTitle}>Revista AQUA - Maio 2024</h3>

          <p className={styles.featuredDescription}>
            Tecnologias inovadoras para aumentar a produtividade e a
            sustentabilidade na aquicultura moderna.
          </p>

          <div className={styles.meta}>
            <span>
              <Eye size={16} />
              12.5k
            </span>

            <span>
              <Download size={16} />
              3.2k
            </span>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.primaryButton}
              onClick={() => onOpenPdf("/revista.pdf")}
            >
              <BookOpen size={18} />
              Ler Revista
            </button>

            <a
              href="/revista.pdf"
              download
              className={styles.iconButton}
              aria-label="Baixar revista"
            >
              <Download size={18} />
            </a>
          </div>

          <div className={styles.bottomRow}>
            <div className={styles.stars}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} />
              ))}
            </div>

            <button
              className={styles.shareButton}
              onClick={() =>
                onShare("Revista AQUA - Maio 2024", "/revista.pdf")
              }
            >
              <Share2 size={16} />
              Compartilhar
            </button>
          </div>
        </div>
      </section>
    </>
  );
}