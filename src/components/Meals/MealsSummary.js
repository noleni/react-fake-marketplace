import styles from './MealsSummary.module.css';

const MealSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Des plats délicieux, pour le plaisir des yeux</h2>
      <p>
        Choisis ton plat préféré, ajoute-le au panier et imagine-le arriver chez toi.
      </p>
      <p>
        Cette application est créée uniquement pour le plaisir des yeux.
        Aucun livreur n'apportera les plats. En contrepartie, tout est gratuit !
      </p>
    </section>
  );
};

export default MealSummary;
