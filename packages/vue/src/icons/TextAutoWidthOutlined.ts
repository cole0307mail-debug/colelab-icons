// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TextAutoWidthOutlinedSvg from '@colelab/icons-svg/es/asn/TextAutoWidthOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TextAutoWidthOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TextAutoWidthOutlinedSvg }, slots);
  },
});
