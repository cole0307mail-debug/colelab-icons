// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TextAutoHeightOutlinedSvg from '@colelab/icons-svg/es/asn/TextAutoHeightOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TextAutoHeightOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TextAutoHeightOutlinedSvg }, slots);
  },
});
