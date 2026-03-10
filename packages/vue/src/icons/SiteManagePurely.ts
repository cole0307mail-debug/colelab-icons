// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SiteManagePurelySvg from '@colelab/icons-svg/es/asn/SiteManagePurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SiteManagePurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SiteManagePurelySvg }, slots);
  },
});
