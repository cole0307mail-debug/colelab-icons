// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UpgradeOutlinedSvg from '@colelab/icons-svg/es/asn/UpgradeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UpgradeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UpgradeOutlinedSvg }, slots);
  },
});
