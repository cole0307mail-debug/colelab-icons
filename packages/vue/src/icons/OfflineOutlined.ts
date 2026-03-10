// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OfflineOutlinedSvg from '@colelab/icons-svg/es/asn/OfflineOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OfflineOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OfflineOutlinedSvg }, slots);
  },
});
