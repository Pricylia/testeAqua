"use client";

import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import styles from "./page.module.scss";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { FeaturedMagazine } from "@/components/FeaturedMagazine/FeaturedMagazine";
import { CardRevista } from "@/components/CardRevista/CardRevista";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
      />

      <main className={styles.container}>
        <h1 className={styles.title}>Revista Aqua</h1>

        <p className={styles.subtitle}>
          Conteúdo técnico enviado por produtores da comunidade
        </p>

        <FeaturedMagazine
          onOpenPdf={handleOpenPdf}
          onShare={handleShare}
        />

        <h2 className={styles.sectionTitle}>Edições Anteriores</h2>

        <section className={styles.grid}>
          {edicoes.map((edicao) => (
            <CardRevista
              key={edicao.id}
              titulo={edicao.titulo}
              descricao={edicao.descricao}
              imagem={edicao.imagem}
              pdf={edicao.pdf}
              views={edicao.views}
              downloads={edicao.downloads}
              onOpenPdf={handleOpenPdf}
              onShare={handleShare}
            />
          ))}
        </section>

        <div className={styles.loadMoreWrapper}>
          <button className={styles.loadMoreButton}>Ver Mais Edições</button>
        </div>

        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <iframe src={selectedPdf} width="100%" height="100%" />
        </Modal>
      </main>

      <Footer />
    </div>
  );
}