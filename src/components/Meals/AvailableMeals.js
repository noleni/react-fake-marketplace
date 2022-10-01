import styles from './AvailableMeals.module.css';
import MealItem from './MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Osso bucco',
    description: "Le meilleur de l'Italie",
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Pad Thai',
    description: 'Que des bonnes choses dedans !',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...Green...Détox. Tout pour se déculpabiliser',
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
  ));


  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )
};
export default AvailableMeals;
