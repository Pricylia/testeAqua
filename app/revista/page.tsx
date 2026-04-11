"use client";

import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import styles from "./page.module.scss";
import { Eye, Download, Share2, Star, BookOpen } from "lucide-react";

const edicoes = [
  {
    id: 1,
    titulo: "Revista AQUA - Abril 2024",
    descricao: "Gestão eficiente de recursos hídricos e técnicas de monitoramento.",
    imagem: "/images/revista-abril.jpg",
    pdf: "/revista.pdf",
    views: "10.8k",
    downloads: "2.7k",
    rating: 0,
  },
  {
    id: 2,
    titulo: "Revista AQUA - Março 2024",
    descricao: "Nutrição balanceada e estratégias alimentares para crescimento.",
    imagem: "/images/revista-marco.jpg",
    pdf: "/revista.pdf",
    views: "9.3k",
    downloads: "2.4k",
    rating: 0,
  },
  {
    id: 3,
    titulo: "Revista AQUA - Fevereiro 2024",
    descricao: "Cuidados com a qualidade da água e prevenção sanitária.",
    imagem: "/images/revista-fevereiro.jpg",
    pdf: "/revista.pdf",
    views: "11.2k",
    downloads: "3.0k",
    rating: 0,
  },
  {
    id: 4,
    titulo: "Revista AQUA - Janeiro 2024",
    descricao: "Inovação e boas práticas na aquicultura brasileira.",
    imagem: "/images/revista-janeiro.jpg",
    pdf: "/revista.pdf",
    views: "8.9k",
    downloads: "2.2k",
    rating: 0,
  },
  {
    id: 5,
    titulo: "Revista AQUA - Dezembro 2023",
    descricao: "Gestão financeira e planejamento estratégico para produtores.",
    imagem: "/images/revista-dezembro.jpg",
    pdf: "/revista.pdf",
    views: "7.5k",
    downloads: "1.9k",
    rating: 0,
  },
  {
    id: 6,
    titulo: "Revista AQUA - Novembro 2023",
    descricao: "Inovações em sistemas de recirculação e sustentabilidade ambiental.",
    imagem: "/images/revista-novembro.jpg",
    pdf: "/revista.pdf",
    views: "9.7k",
    downloads: "2.5k",
    rating: 0,
  },
];

export default function RevistaPage() {
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("/revista.pdf");

  function handleOpenPdf(pdf: string) {
    setSelectedPdf(pdf);
    setOpen(true);
  }

  async function handleShare(title: string, pdf: string) {
    const url = `${window.location.origin}${pdf}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: `Confira esta edição: ${title}`,
          url,
        });
      } catch {
        // usuário cancelou
      }
      return;
    }

    await navigator.clipboard.writeText(url);
    alert("Link copiado com sucesso!");
  }

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.container}>
        <h1 className={styles.title}>Revista Aqua</h1>

        <p className={styles.subtitle}>
          Conteúdo técnico enviado por produtores da comunidade
        </p>

        <h2 className={styles.sectionTitle}>
          <Star size={18} fill="#0b7cff" color="#0b7cff" />
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
                onClick={() => handleOpenPdf("/revista.pdf")}
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
                  handleShare("Revista AQUA - Maio 2024", "/revista.pdf")
                }
              >
                <Share2 size={16} />
                Compartilhar
              </button>
            </div>
          </div>
        </section>

        <h2 className={styles.sectionTitle}>Edições Anteriores</h2>

        <section className={styles.grid}>
          {edicoes.map((edicao) => (
            <article key={edicao.id} className={styles.card}>
              <img
                src={edicao.imagem}
                alt={edicao.titulo}
                className={styles.cardImage}
              />

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{edicao.titulo}</h3>

                <p className={styles.cardDescription}>{edicao.descricao}</p>

                <div className={styles.meta}>
                  <span>
                    <Eye size={16} />
                    {edicao.views}
                  </span>

                  <span>
                    <Download size={16} />
                    {edicao.downloads}
                  </span>
                </div>

                <div className={styles.actions}>
                  <button
                    className={styles.primaryButton}
                    onClick={() => handleOpenPdf(edicao.pdf)}
                  >
                    <BookOpen size={18} />
                    Ler Revista
                  </button>

                  <a
                    href={edicao.pdf}
                    download
                    className={styles.iconButton}
                    aria-label={`Baixar ${edicao.titulo}`}
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
                    onClick={() => handleShare(edicao.titulo, edicao.pdf)}
                  >
                    <Share2 size={16} />
                    Compartilhar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className={styles.loadMoreWrapper}>
          <button className={styles.loadMoreButton}>Ver Mais Edições</button>
        </div>

        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <iframe src={selectedPdf} width="100%" height="100%" />
        </Modal>
      </main>
    </div>
  );
}