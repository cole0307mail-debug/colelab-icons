// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FlashlightOutlinedSvg from '@colelab/icons-svg/es/asn/FlashlightOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FlashlightOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FlashlightOutlinedSvg }, slots);
  },
});
