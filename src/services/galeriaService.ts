
// Tipos para os dados da galeria
export interface Album {
  id: string;
  titulo: string;
  capa: string;
  fotos: string[];
}

// Dados de exemplo para os álbuns
export const getAlbuns = (): Album[] => {
  return [
    {
      id: "dia-das-maes-5",
      titulo: "DIA DAS MÃES DIA 5",
      capa: "https://contagem.ient.com.br/assets/img/galeria/maes-dia5-1.jpg",
      fotos: [
        "https://contagem.ient.com.br/assets/img/galeria/maes-dia5-1.jpg",
        "https://contagem.ient.com.br/assets/img/galeria/maes-dia5-2.jpg",
        "https://contagem.ient.com.br/assets/img/galeria/maes-dia5-3.jpg",
      ]
    },
    {
      id: "dia-das-maes-4",
      titulo: "DIA DAS MÃES - DIA 4",
      capa: "https://contagem.ient.com.br/assets/img/galeria/maes-dia4-1.jpg",
      fotos: [
        "https://contagem.ient.com.br/assets/img/galeria/maes-dia4-1.jpg",
        "https://contagem.ient.com.br/assets/img/galeria/maes-dia4-2.jpg",
      ]
    },
    {
      id: "dia-das-maes-3",
      titulo: "DIA DAS MÃES - DIA 3",
      capa: "https://contagem.ient.com.br/assets/img/galeria/maes-dia3-1.jpg",
      fotos: [
        "https://contagem.ient.com.br/assets/img/galeria/maes-dia3-1.jpg",
      ]
    },
    {
      id: "dia-das-maes-2",
      titulo: "DIA DAS MÃES - DIA 2",
      capa: "https://contagem.ient.com.br/assets/img/galeria/maes-dia2-1.jpg",
      fotos: [
        "https://contagem.ient.com.br/assets/img/galeria/maes-dia2-1.jpg",
      ]
    },
    {
      id: "dia-das-maes-1",
      titulo: "DIA DAS MÃES - DIA 1",
      capa: "https://contagem.ient.com.br/assets/img/galeria/maes-dia1-1.jpg",
      fotos: [
        "https://contagem.ient.com.br/assets/img/galeria/maes-dia1-1.jpg",
      ]
    },
  ];
};

// Função para obter um álbum específico
export const getAlbumById = (id: string): Album | undefined => {
  const albuns = getAlbuns();
  return albuns.find(album => album.id === id);
};
