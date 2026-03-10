// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MosaicOutlinedSvg from '@colelab/icons-svg/es/asn/MosaicOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MosaicOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MosaicOutlinedSvg }, slots);
  },
});
