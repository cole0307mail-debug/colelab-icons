// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MenuUnfoldOutlinedSvg from '@colelab/icons-svg/es/asn/MenuUnfoldOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MenuUnfoldOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MenuUnfoldOutlinedSvg }, slots);
  },
});
