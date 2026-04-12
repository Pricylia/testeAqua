import styles from "@/components/CardRevista/CardRevista.module.scss";
import { Eye, Download, Share2, Star, BookOpen } from "lucide-react";

type Props = {
  titulo: string;
  descricao: string;
  imagem: string;
  pdf: string;
  views: string;
  downloads: string;
  onOpenPdf: (pdf: string) => void;
  onShare: (title: string, pdf: string) => void;
};

export function CardRevista({
  titulo,
  descricao,
  imagem,
  pdf,
  views,
  downloads,
  onOpenPdf,
  onShare,
}: Props) {
  return (
    <article className={styles.card}>
      <img
        src={imagem}
        alt={titulo}
        className={styles.cardImage}
      />

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{titulo}</h3>

        <p className={styles.cardDescription}>{descricao}</p>

        <div className={styles.meta}>
          <span>
            <Eye size={16} />
            {views}
          </span>

          <span>
            <Download size={16} />
            {downloads}
          </span>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.primaryButton}
            onClick={() => onOpenPdf(pdf)}
          >
            <BookOpen size={18} />
            Ler Revista
          </button>

          <a
            href={pdf}
            download
            className={styles.iconButton}
            aria-label={`Baixar ${titulo}`}
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
            onClick={() => onShare(titulo, pdf)}
          >
            <Share2 size={16} />
            Compartilhar
          </button>
        </div>
      </div>
    </article>
  );
}