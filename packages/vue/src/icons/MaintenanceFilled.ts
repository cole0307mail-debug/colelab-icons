// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MaintenanceFilledSvg from '@colelab/icons-svg/es/asn/MaintenanceFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MaintenanceFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MaintenanceFilledSvg }, slots);
  },
});
