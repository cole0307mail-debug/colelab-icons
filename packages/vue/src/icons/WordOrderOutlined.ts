// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WordOrderOutlinedSvg from '@colelab/icons-svg/es/asn/WordOrderOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WordOrderOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WordOrderOutlinedSvg }, slots);
  },
});
