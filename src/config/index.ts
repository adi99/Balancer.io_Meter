import merge from 'lodash/merge';
import registry from '@balancer-labs/assets/generated/pm/registry.homestead.json';
import registryKovan from '@balancer-labs/assets/generated/pm/registry.kovan.json';
import registryWarringstakes from '@balancer-labs/assets/generated/pm/registry.Warringstakes.json';
import homestead from '@/config/homestead.json';
import kovan from '@/config/kovan.json';
import Warringstakes from '@/config/Warringstakes.json';

const configs = { homestead, kovan, Warringstakes };
configs.homestead = merge(registry, configs.homestead);
configs.kovan = merge(registryKovan, configs.kovan);
configs.Warringstakes = merge(registryWarringstakes, configs.Warringstakes);
const network = process.env.VUE_APP_NETWORK || 'Warringstakes';
const config = configs[network];
config.env = process.env.VUE_APP_ENV || 'staging';

export default config;
