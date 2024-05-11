import { type AppStackParamList } from "~constants/navigation.constants";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppStackParamList {}
    }
}
