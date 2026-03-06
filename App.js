import StackNavigator from './navigation/StackNavigator'
import { migrateDbIfNeeded } from './database/InitDatabase';
import { SQLiteProvider } from 'expo-sqlite'
export default function App() {

  return (
    <SQLiteProvider databaseName="maDB.db" onInit={migrateDbIfNeeded}>
      <StackNavigator />
    </SQLiteProvider>
  );
}
