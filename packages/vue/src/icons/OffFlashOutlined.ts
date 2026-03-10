// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OffFlashOutlinedSvg from '@colelab/icons-svg/es/asn/OffFlashOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OffFlashOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OffFlashOutlinedSvg }, slots);
  },
});
