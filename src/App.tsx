import React from "react";
import { Card } from "@raive-ui/core";
import { Button } from "@raive-ui/button";

const App: React.FC = () => {
  const cardData = [
    {
      title: "Card 1",
      description: "This is a description for Card 1.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Card 2",
      description: "This is a description for Card 2.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Card 3",
      description: "This is a description for Card 3.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Card 4",
      description: "This is a description for Card 4.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div style={styles.container}>
    
      <div style={styles.buttonsContainer}>
        <Button variant="primary" size="large">Primary</Button>
        <Button variant="secondary" size="medium">Secondary</Button>
        <Button variant="outline" size="medium">Outline</Button>
        <Button variant="glass" size="small">Glass</Button>
      </div>
      <div style={styles.cardsContainer}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            footer={<Button variant="primary">View More</Button>}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    gap: "20px",
  },
  buttonsContainer: {
    display: "flex",
    gap: "10px",
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
  },
};

export default App;
